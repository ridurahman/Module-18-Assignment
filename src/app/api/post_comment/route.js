import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.post_comment.create({
    //   data: {
    //     postId: 4,
    //     parentId: 5,
    //     title: "bgdjfghd",
    //     published: 1,
    //     content: "hjhgj",
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.post_comment.createMany({
      data: [
        {
          postId: 5,
          parentId: 2,
          title: "bgdjfghd",
          published: 1,
          content: "hjhgj",
        },
        {
          postId: 6,
          parentId: 8,
          title: "bgdjfghd",
          published: 1,
          content: "hjhgj",
        },
        {
          postId: 4,
          parentId: 3,
          title: "dgs",
          published: 1,
          content: "hjhgj",
        },
        {
          postId: 5,
          parentId: 6,
          title: "dfgd",
          published: 1,
          content: "hjhgj",
        },
      ],
    });

    //=============Inserting with Relations====================

    // const result = await prisma.post_comment.create({
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

    //============findMany Where And Select=================
    // const result = await prisma.post_comment.findMany({
    //   where: { title: "dfgd" },
    //   select: { id: true },
    // });

    //============findUnique=================
    // const result = await prisma.post_comment.findUnique({
    //     where: { title: "Prisma" },
    //   });

    //============findFirst()=================
    //const result = await prisma.post_comment.findFirst();

    //============find orderBy=================
    //const result = await prisma.post_comment.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.post_comment.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.post_comment.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.post_comment.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    const result = await prisma.post_comment.findMany({
      orderBy: {
        id: "desc",
      },
      take: 5,
    });
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
    const result = await prisma.post_comment.update({
      where: { id: 6 },
      data: {
        postId: 4,
        parentId: 3,
        title: "Prisma",
        published: 1,
        content: "hjhgj",
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
    const result = await prisma.post_comment.delete({
      where: { id: 1 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
