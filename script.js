// Substitua com suas credenciais do Supabase
const SUPABASE_URL = 'https://byvdcgzjctefbiwsybft.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmRjZ3pqY3RlZmJpd3N5YmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTkyMTAsImV4cCI6MjA2OTM5NTIxMH0.hGGjZbpmKvqJkOCBRgLcp8fWChg6YiBKckxRgPmT9Wc';

const supabase = supabase.createClient(https://byvdcgzjctefbiwsybft.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmRjZ3pqY3RlZmJpd3N5YmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTkyMTAsImV4cCI6MjA2OTM5NTIxMH0.hGGjZbpmKvqJkOCBRgLcp8fWChg6YiBKckxRgPmT9Wc);

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error, session } = await supabase.auth.signInWithPassword({ email, password });
    document.getElementById('msg').textContent = error ? error.message : 'Login realizado!';
    if (!error) window.location.href = 'quiz.html';
  });
}

// Quiz
const quizForm = document.getElementById('quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const humor = document.getElementById('humor').value;
    const user = (await supabase.auth.getUser()).data.user;
    await supabase.from('quiz_respostas').insert([{ user_id: user.id, humor }]);
    document.getElementById('resultado-quiz').textContent = 'Resposta registrada com sucesso!';
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
  });
}

// Dashboard
async function carregarDashboard() {
  const dadosContainer = document.getElementById('dados-usuarios');
  if (dadosContainer) {
    const { data, error } = await supabase.from('quiz_respostas').select('*');
    if (data) {
      dadosContainer.innerHTML = data.map(d =>
        `<p><strong>ID:</strong> ${d.user_id} - <strong>Humor:</strong> ${d.humor}</p>`
      ).join('');
    }
  }
}
carregarDashboard();
