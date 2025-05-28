"use client";

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function SupportChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Harbor Tech support assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response (to be replaced with actual AI implementation)
    setTimeout(() => {
      const botResponses = [
        "I understand you're asking about that. Let me check our documentation for you.",
        "Great question! Based on my knowledge, you should be able to find that in the settings menu.",
        "I'm happy to help with that. Have you tried restarting the system first?",
        "Let me look that up for you. According to our manuals, this is typically handled through the inventory management section.",
        "I don't have the specific answer to that question yet, but our development team is working on training me to handle more complex queries."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 z-50 flex flex-col items-end">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-primary-navy hover:bg-primary-sky text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open support chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
          </svg>
        )}
      </button>
      
      {/* Chat window */}
      <div 
        className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 mt-4 w-full sm:w-96 max-h-[500px] flex flex-col ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: isOpen ? '400px' : '0' }}
      >
        {/* Chat header */}
        <div className="bg-primary-navy p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary-navy/40 rounded-full p-1 mr-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.53,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,11H9V8H7V11H7V13H7V16H9V13H17V16H19V13H19V11H19V8H17V11Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Support Assistant</h3>
              <p className="text-xs text-white/80">Powered by Harbor Tech AI</p>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white/80 hover:text-white"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
        
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === 'user' 
                    ? 'bg-primary-sky text-white rounded-tr-none'
                    : 'bg-gray-200 text-primary-navy rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-sky"
            aria-label="Type your message"
          />
          <button 
            type="submit"
            className="bg-primary-navy hover:bg-primary-sky text-white rounded-r-lg px-4 transition-colors"
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
} 