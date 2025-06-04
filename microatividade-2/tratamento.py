MIN_PASSWORD_LENGTH = 8
MAX_ATTEMPTS = 3

# Simulando um "banco de dados" em memória
usuarios = {
    "joao": {"senha": "senha123", "tentativas": 0},
    "maria": {"senha": "abc$1234", "tentativas": 0}
}

def user_exists(username):
    return username in usuarios

def get_failed_attempts(username):
    return usuarios.get(username, {}).get("tentativas", 0)

def increment_failed_attempts(username):
    if username in usuarios:
        usuarios[username]["tentativas"] += 1

def reset_failed_attempts(username):
    if username in usuarios:
        usuarios[username]["tentativas"] = 0

def lookup_credentials(username, password):
    return username in usuarios and usuarios[username]["senha"] == password

# Função principal de login
def login(username, password):
    if user_exists(username):
        if get_failed_attempts(username) >= MAX_ATTEMPTS:
            return "Muitas tentativas falhas. Tente novamente mais tarde."

    if len(password) < MIN_PASSWORD_LENGTH:
        return f"A senha deve conter pelo menos {MIN_PASSWORD_LENGTH} caracteres."

    if not lookup_credentials(username, password):
        increment_failed_attempts(username)
        return "Usuário ou senha incorretos."

    reset_failed_attempts(username)
    return "Login efetuado com sucesso."

# Exemplo de uso
print(login("joao", "123"))            # Senha fraca
print(login("joao", "erradinha"))      # Errada
print(login("joao", "erradinha"))      # Tentativa 2
print(login("joao", "erradinha"))      # Tentativa 3
print(login("joao", "senha123"))       # Correta mas já bloqueado
