import { CloseOutlined, LoadingOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, ColorPicker, Divider, Input, Upload, message } from "antd";
import { Paperclip, Send, X } from 'lucide-react';
import { useState } from 'react';
const { TextArea } = Input;



/**
 * AgentSettings - fixed upload to get base64 client-side and avoid auto upload
 */
export default function AgentSettings() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [messages, setMessages] = useState([
    { id: 1, text: 'I have a question' },
    { id: 2, text: 'Tell me more' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);


  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage }]);
      setNewMessage('');
    }
  };

  const removeMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newMessages = [...messages];
    const draggedMessage = newMessages[draggedItem];
    newMessages.splice(draggedItem, 1);
    newMessages.splice(index, 0, draggedMessage);

    setMessages(newMessages);
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };


  // helper that returns a Promise so we can await it
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.onload = () => resolve(String(reader.result));
      reader.readAsDataURL(file);
    });
  };

  // Validate file and convert to base64, then return false to prevent auto upload.
  const beforeUpload = async (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return Upload.LIST_IGNORE; // keep file out of list
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }

    // convert to base64 & set state
    try {
      setLoading(true);
      const base64 = await getBase64(file);
      setImageUrl(base64);
    } catch (err) {
      message.error('Failed to read image');
    } finally {
      setLoading(false);
    }

    // Returning false prevents Upload from posting the file to `action`.
    // Upload.LIST_IGNORE prevents the file from being added to fileList (AntD v4+).
    return Upload.LIST_IGNORE;
  };

  // You can still keep handleChange if you want to monitor removals, etc.
  const handleChange = info => {
    // We handle the base64 in beforeUpload, but you can still handle fileList changes here.
    // console.log('upload info', info);
  };

  const uploadButton = (
    <div style={{ border: 0, background: 'none', textAlign: 'center' }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="">
      <Card>
        <h1 className="text-2xl font-bold">Your agent is ready</h1>

        <p className="mt-2">
          Copy this code and place it before the <code>&lt;/body&gt;</code> tag on every page of your website
        </p>
        <Divider />

        <div className="relative">
          <Button type="primary" className="absolute right-0">Copy</Button>
          <pre className="bg-gray-100 p-4 rounded text-sm font-mono">
            <code>
              {`<!--Start of Vertix AI Script-->
<script type="text/javascript">
var Vertix_API=Vertix AI||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.Vertix.AI/6899fb7a70cc1a1922c4067a/1j2cnsm9p';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Vertix AI Script-->`}
            </code>
          </pre>
        </div>
      </Card>

      <div className="flex md:flex-row flex-col mt-6">
        <Card className="flex-1">
          <h1 className="text-2xl font-bold">Customize the widget to suit your brand</h1>
          <p className="mt-2">You can change anytime</p>
          <Divider />

          <div className='space-y-6'>
            <div>
              <h3 className="font-semibold mb-2">Logo</h3>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                // Prevent automatic upload to a server:
                action={undefined}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img draggable={false} src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Color</h3>

              <div className='flex gap-4' >
                {
                  ['#035DFF', '#D42300', '#7866FF', '#05A84E'].map(color => (
                    <Button key={color} style={{ padding: '20px', background: color }}></Button>
                  ))
                }
                <ColorPicker defaultValue="#1677ff" showText />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Color</h3>

              <TextArea rows={4} />
            </div>

            <div >
              <h2 className="font-semibold mb-2">Suggested message</h2>

              <div className="space-y-3 mb-6">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-3 p-4 bg-gray-100 rounded-lg cursor-move transition-all ${draggedItem === index ? 'opacity-50' : 'opacity-100'
                      } hover:bg-gray-200`}
                  >
                    <MenuOutlined className="text-gray-400 cursor-grab active:cursor-grabbing" />
                    <div className="flex-1 text-gray-700">{message.text}</div>
                    <Button
                      type="text"
                      icon={<CloseOutlined />}
                      onClick={() => removeMessage(message.id)}
                      className="text-gray-400 hover:text-red-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Input
                  placeholder="Type your message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onPressEnter={addMessage}
                  className="flex-1"
                  size="large"
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={addMessage}
                  size="large"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Add message
                </Button>
              </div>
            </div>

          </div>
        </Card>

        <div className="flex-1">
          <MessageBox />
        </div>
      </div>
    </div>
  );
}


const MessageBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi, How are you?', sender: 'bot' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  const handleQuickAction = (action) => {
    setMessages([...messages, { id: messages.length + 1, text: action, sender: 'user' }]);
  };
  return (
    <div className="w-full max-w-md mx-auto h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 4L4 10v6c0 8 5 14 12 18 7-4 12-10 12-18v-6L16 4z" />
            </svg>
            <span className="text-xl font-bold">VIRTIX AI</span>
          </div>
        </div>
        <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50 relative">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-800 shadow-sm'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Quick Action Buttons */}
        {messages.length === 1 && (
          <div className="mx-4 absolute bottom-4 w-[80%]">
            <div>
              <button
                onClick={() => handleQuickAction('I have a question')}
                className="flex-1 px-4 py-3 bg-white text-green-600 border-2 border-green-600 rounded-full hover:bg-green-50 transition-colors font-medium"
              >
                I have a question
              </button>
              <button
                onClick={() => handleQuickAction('Tell me more')}
                className="flex-1 px-4 py-3 bg-white text-green-600 border-2 border-green-600 rounded-full hover:bg-green-50 transition-colors font-medium"
              >
                Tell me more
              </button>
              <button
                onClick={() => handleQuickAction('Tell me more')}
                className="flex-1 px-4 py-3 bg-white text-green-600 border-2 border-green-600 rounded-full hover:bg-green-50 transition-colors font-medium"
              >
                Tell me more
              </button>
              <button
                onClick={() => handleQuickAction('Tell me more')}
                className="flex-1 px-4 py-3 bg-white text-green-600 border-2 border-green-600 rounded-full hover:bg-green-50 transition-colors font-medium"
              >
                Tell me more
              </button>
            </div>

          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
          <input
            type="text"
            placeholder="Type here & press enter"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            onClick={handleSend}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
