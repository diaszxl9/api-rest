const express = require("express");

type Request = import("express").Request;
type Response = import("express").Response;

const app = express();
const PORT = 3000; 

app.use(express.json());

interface User {
    id: number;
    nome: string;
    email: string;
}

const users: User[] = [
    {
        id: 1,
        nome: "Fernando",
        email: "f@gmail.com",
    },
    {
        id: 2,
        nome: "Maria",
        email: "m@gmail.com",
    },
        {
        id: 3,
        nome: "Caio",
        email: "c@gmail.com",
    },
        {
        id: 4,
        nome: "Joao",
        email: "j@gmail.com",
    },
        {
        id: 5,
        nome: "Osvaldo",
        email: "o@gmail.com",
    },
];

app.get("/users", (req: Request, res: Response) => {
    return res.status(200).json(users);
})

app.get("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

        if(!Number.isInteger(id) || id <= 0) {
            return res.status(404).json({
                messege: "ID Inválido"
            });
        }
       const user = users.find((user) => user.id === id);
        if(!user) {
            return res.status(404).json({
                messege: "Usuário não encontrado."
            });
        }
        return res.status(200).json(user)
})

app.post("/users", (req: Request, res: Response) => {

    const {nome, email} = req.body;
        if(
            typeof nome !== "string" ||
            !nome.trim( ) || 
            typeof email !== "string" ||
            !email.trim( )
        ) {
            return res.status(400).json({
                messege: "Nome e email são obrigatórios!"
            });
        }
    const newUser: User = {
        id: users.length ? Math.max(... users.map((user) => user.id)) + 1 : 1,
        nome: nome.trim(),
        email: email.trim(),
    };

    users.push(newUser);

    return res.status(201).json(newUser);
    
})


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
