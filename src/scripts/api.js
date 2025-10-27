// Authentication API endpoints
export const LOGIN_USER = 'api/user/token/'
export const REFRESH_TOKEN = 'api/user/token/refresh/'
export const REGISTER_USER = 'api/user/register/'
export const LOGOUT_USER = 'api/user/logout/'
export const PASSWORD_RESET = 'api/user/password/reset/'
export const PASSWORD_RESET_CONFIRM = 'api/user/password/reset/confirm/'
export const PASSWORD_CHANGE = 'api/user/password/change/'

// Agent API endpoints
export const CREATE_AGENT = 'api/agent/agents/'
export const GET_AGENT = 'api/agent/agents/'
export const GET_AGENTS = 'api/agent/agents/'
export const UPDATE_AGENT = 'api/agent/agents/'
export const DELETE_AGENT = 'api/agent/agents/'

// Prompts API endpoints
export const GET_PROMPTS = 'api/agent/prompts/'
export const CREATE_PROMPT = 'api/agent/prompts/'
export const UPDATE_PROMPT = 'api/agent/prompts/'
export const DELETE_PROMPT = 'api/agent/prompts/'

// Files API endpoints
export const GET_FILES = 'api/agent/files/'
export const CREATE_FILE = 'api/agent/files/'
export const UPDATE_FILE = 'api/agent/files/'
export const DELETE_FILE = 'api/agent/files/'

// Billing API endpoints
export const GET_BILLING_PLANS = 'api/billing/plans/'
export const START_SUBSCRIPTION = 'api/billing/me/subscription/start/'