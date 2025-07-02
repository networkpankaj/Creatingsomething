.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  overflow: hidden;
}

.auth-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: -75px;
  left: -75px;
  animation: float 6s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.auth-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 2rem;
  border-radius: 20px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 420px; /* Slightly wider for sign-up */
  position: relative;
  z-index: 1;
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.auth-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.auth-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.025em;
}

.auth-subtitle {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.auth-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem; /* Reduced for sign-up since more fields */
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.025em;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  box-sizing: border-box;
  color: #374151;
  height: 46px;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-input.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #9ca3af;
  transition: color 0.3s ease;
}

.form-input:focus + .input-icon {
  color: #667eea;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #9ca3af;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #667eea;
}

.password-toggle svg {
  width: 18px;
  height: 18px;
}

.form-terms {
  margin-bottom: 1.5rem;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 0.85rem;
  color: #374151;
  position: relative;
  line-height: 1.4;
}

.checkbox-wrapper input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}

.checkmark {
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-radius: 3px;
  margin-right: 0.5rem;
  margin-top: 2px; /* Align with text */
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkmark {
  background: #667eea;
  border-color: #667eea;
}

.checkbox-wrapper input[type="checkbox"]:checked + .checkmark:after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 3px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.terms-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.terms-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

.error-message {
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.error-banner {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.error-banner svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.btn-primary {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.025em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 48px;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.auth-footer {
  text-align: center;
  margin-bottom: 1.5rem;
}

.auth-footer p {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.link-button {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-weight: 600;
  font-size: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-left: 0.25rem;
}

.link-button:hover {
  color: #5a67d8;
}

.social-login {
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
}

.divider {
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
}

.divider span {
  background: rgba(255, 255, 255, 0.95);
  padding: 0 1rem;
  color: #9ca3af;
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e5e7eb;
}

.social-buttons {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  height: 44px;
}

.social-btn:hover {
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-btn svg {
  width: 18px;
  height: 18px;
}

.social-btn.google:hover {
  border-color: #4285f4;
}

.social-btn.github:hover {
  border-color: #24292e;
}

/* Responsive Design */
@media (max-width: 480px) {
  .auth-container {
    padding: 1rem;
  }
  
  .auth-card {
    padding: 1.5rem 1.25rem;
  }
  
  .brand-title {
    font-size: 1.5rem;
  }
  
  .auth-title {
    font-size: 1.25rem;
  }
  
  .social-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }
}