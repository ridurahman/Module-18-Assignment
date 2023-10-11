import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.user.create({
    //   data: {
    //     firstName: "John",
    //     lastName: "Doe",
    //     mobile: "01111111111",
    //     email: "Jhon1@gmail.com",
    //     passwordHash: "123",
    //     intro: "kjdjfhejfge",
    //     profile: "dfjhj",
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.user.createMany({
      data: [
        {
          firstName: "Jany",
          lastName: "Doe",
          mobile: "01111111111",
          email: "Jhon1@gmail.com",
          passwordHash: "123",
          intro: "hgkjdjfhejfge",
          profile: "dfjhj",
        },
        {
          firstName: "Jack",
          lastName: "Doe",
          mobile: "01111111114",
          email: "Jhon2@gmail.com",
          passwordHash: "123",
          intro: "kjdjfhejfge",
          profile: "dfjhj",
        },
        {
          firstName: "Jim",
          lastName: "Doe",
          mobile: "01111111115",
          email: "Jhon3@gmail.com",
          passwordHash: "123",
          intro: "hgkjdjfhejfge",
          profile: "dfjhj",
        },
      ],
    });

    //=============Inserting with Relations====================

    // const result = await prisma.user.create({
    //   data: {
    //     firstName: "Jim",
    //     lastName: "Doe",
    //     mobile: "01111111111",
    //     email: "Jhon7@gmail.com",
    //     passwordHash: "123",
    //     intro: "kjdjfhejfge",
    //     profile: "dfjhj",

    //     post: {
    //       create: {
    //         parentId: 4,
    //         title: "fvdfgd",
    //         metaTitle: "dfsdfds",
    //         slug: "fjdnbv",
    //         summary: "jdfkg",
    //         published: 1,
    //         content: "fgdg",
    //       },
    //     },
    //   },
    // });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================READ===================

    //=================findMany==============
    const result = await prisma.user.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.user.findMany({
    //   where: { mobile: "01111111111" },
    //   select: { id: true },
    // });

    //============findUnique=================
    // const result = await prisma.user.findUnique({
    //     where: { email: "Jhon1@gmail.com" },
    //   });

    //============findFirst()=================
    //const result = await prisma.user.findFirst();

    //============find orderBy=================
    //const result = await prisma.user.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.user.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.user.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.user.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.user.findMany({
    //   orderBy: {
    //     id: "desc",
    //   },
    //   take: 5,
    // });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Update===================
    const result = await prisma.user.update({
      where: { id: 1 },
      data: {
        firstName: "Juneee",
        lastName: "Doe",
        mobile: "01111111111",
        email: "Jhon7@gmail.com",
        passwordHash: "123",
        intro: "kjdjfhejfge",
        profile: "dfjhj",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================DELETE===================
    const result = await prisma.user.delete({
      where: { id: 3 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
