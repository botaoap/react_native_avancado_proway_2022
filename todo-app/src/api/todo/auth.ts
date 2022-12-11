type LoginReponse = {
    token: string;
}

export class AuthAPI {
    static async login(username: string, password: string): Promise<LoginReponse> {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (username === "teste@email.com" && password === "123456") {
                    resolve({ token: "1213w2ewqreqe3warfew32tfw4e4e2r" })
                } else {
                    reject(new Error("login é invalido"))
                }
             }, 300)
        })
    }
}