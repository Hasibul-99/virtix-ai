
import React, { useState } from 'react';
import { Button, Avatar } from 'antd';
import { ArrowLeftOutlined, ReloadOutlined, FilterOutlined, ExportOutlined } from '@ant-design/icons';

export default function ChatHistory() {
  const [selectedConversation, setSelectedConversation] = useState(0);

  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      name: 'Omar Faruk',
      avatar: '/assets/images/avatar1.jpg',
      lastMessage: 'Hello! How can I assist you...',
      messageCount: 4,
      date: 'July 8, 2025',
      messages: [
        { id: 1, text: 'Hello! How can I assist you today?', isBot: false, time: '10:30 AM' },
        { id: 2, text: 'Hello! How can I assist you today?', isBot: true, time: '10:31 AM' },
        { id: 3, text: 'Hello! How can I assist you today?', isBot: false, time: '10:32 AM' },
        { id: 4, text: 'Hello! How can I assist you today?', isBot: true, time: '10:33 AM' }
      ]
    },
    {
      id: 2,
      name: 'Omar Faruk',
      avatar: '/assets/images/avatar1.jpg',
      lastMessage: 'Hello! How can I assist you...',
      messageCount: 5,
      date: 'July 8, 2025',
      messages: [
        { id: 1, text: 'Hello! How can I assist you today?', isBot: false, time: '11:30 AM' },
        { id: 2, text: 'Hello! How can I assist you today?', isBot: true, time: '11:31 AM' }
      ]
    },
    {
      id: 3,
      name: 'Omar Faruk',
      avatar: '/assets/images/avatar1.jpg',
      lastMessage: 'Hello! How can I assist you...',
      messageCount: 4,
      date: 'July 8, 2025',
      messages: [
        { id: 1, text: 'Hello! How can I assist you today?', isBot: false, time: '12:30 PM' },
        { id: 2, text: 'Hello! How can I assist you today?', isBot: true, time: '12:31 PM' }
      ]
    },
    {
      id: 4,
      name: 'Omar Faruk',
      avatar: '/assets/images/avatar1.jpg',
      lastMessage: 'Hello! How can I assist you...',
      messageCount: 4,
      date: 'July 8, 2025',
      messages: [
        { id: 1, text: 'Hello! How can I assist you today?', isBot: false, time: '1:30 PM' },
        { id: 2, text: 'Hello! How can I assist you today?', isBot: true, time: '1:31 PM' }
      ]
    },
    {
      id: 5,
      name: 'Omar Faruk',
      avatar: '/assets/images/avatar1.jpg',
      lastMessage: 'Hello! How can I assist you...',
      messageCount: 4,
      date: 'July 8, 2025',
      messages: [
        { id: 1, text: 'Hello! How can I assist you today?', isBot: false, time: '2:30 PM' },
        { id: 2, text: 'Hello! How can I assist you today?', isBot: true, time: '2:31 PM' }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Conversation List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar content will be implemented next */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Conversations</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation, index) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(index)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedConversation === index ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <Avatar size={40} src={conversation.avatar} className="flex-shrink-0">
                  {conversation.name.charAt(0)}
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500 ml-2">
                      {conversation.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                  <span className="text-xs text-gray-400 mt-1">
                    {conversation.messageCount} Messages
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                type="text" 
                icon={<ArrowLeftOutlined />} 
                className="text-gray-600"
              />
              <h1 className="text-xl font-semibold text-gray-900">
                {conversations[selectedConversation]?.name || 'Omar Faruk'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                type="default" 
                icon={<ReloadOutlined />}
                className="text-gray-600"
              >
                Refresh
              </Button>
              <Button 
                type="default" 
                icon={<FilterOutlined />}
                className="text-gray-600"
              >
                Filter
              </Button>
              <Button 
                type="default" 
                icon={<ExportOutlined />}
                className="text-gray-600"
              >
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {conversations[selectedConversation]?.messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className="max-w-xs lg:max-w-md">
                {message.isBot ? (
                  // Bot message (left-aligned, light background)
                  <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-2">
                    <p className="text-sm">{message.text}</p>
                  </div>
                ) : (
                  // User message (right-aligned, black background)
                  <div className="bg-black text-white rounded-2xl px-4 py-2">
                    <p className="text-sm">{message.text}</p>
                  </div>
                )}
                <div className={`text-xs text-gray-500 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
