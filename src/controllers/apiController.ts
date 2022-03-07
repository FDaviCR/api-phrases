import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let randomNumber = Math.floor(Math.random() * 100);
    res.json({randomNumber: randomNumber});
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome: `Você enviou o nome ${nome}`});
}