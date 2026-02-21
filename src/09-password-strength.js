/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (password === "" || typeof password !== "string") return "weak";

  let strengthPoint = 0;

  const specialCharachters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "+", "-", "=", "[", "]", "{", "}", "|",
    ";", ":", ",", ".", "<", ">", "?"
  ];

  if (password.length >= 8)
    strengthPoint++;

  if (hasUppercase(password))
    strengthPoint++;

  if (/[a-z]/.test(password))
    strengthPoint++;

  if (/[0-9]/.test(password))
    strengthPoint++;

  // Special character check (fixed)
  let hasSpecial = false;
  for (let char of password) {
    if (specialCharachters.includes(char)) {
      hasSpecial = true;
      break;
    }
  }

  if (hasSpecial)
    strengthPoint++;

  if (strengthPoint <= 1) return "weak";
  if (strengthPoint <= 3) return "medium";
  if (strengthPoint === 4) return "strong";
  if (strengthPoint === 5) return "very strong";

  function hasUppercase(password) {
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
      if (char >= "A" && char <= "Z") {
        return true;
      }
    }
    return false;
  }
}
