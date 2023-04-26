import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany({
    include:{
      productos:true,
  }
  });

  await prisma.$disconnect();

  res.status(200).json(categorias);
}
