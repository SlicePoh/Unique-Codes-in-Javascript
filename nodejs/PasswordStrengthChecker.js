const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a password: ', (password) => {
  const strength = checkPasswordStrength(password);
  console.log(`Password strength: ${strength}`);
  rl.close();
});

function checkPasswordStrength(password) {
  const lengthRegex = /^.{8,}$/;             
  const uppercaseRegex = /[A-Z]/;            
  const lowercaseRegex = /[a-z]/;            
  const digitRegex = /[0-9]/;                
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  let score = 0;
  if (lengthRegex.test(password)) score++;
  if (uppercaseRegex.test(password)) score++;
  if (lowercaseRegex.test(password)) score++;
  if (digitRegex.test(password)) score++;
  if (specialCharRegex.test(password)) score++;

  if (score === 5) 
    return 'Strong';
  else if (score >= 3) 
    return 'Moderate';
  else 
    return 'Weak';
}
