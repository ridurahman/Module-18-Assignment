import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.post.create({
    //   data: {
    //     authorId:2,
    //     parentId: 4,
    //     title: "fvdfgd",
    //     metaTitle: "dfsdfds",
    //     slug: "fjdnbv",
    //     summary: "jdfkg",
    //     published: 1,
    //     content: "fgdg",
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.post.createMany({
      data: [
        {
          authorId: 5,
          parentId: 6,
          title: "fdgd",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
          summary: "jdfkg",
          published: 1,
          content: "fgdg",
        },
        {
          authorId: 3,
          parentId: 8,
          title: "iyre",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
          summary: "jdfkg",
          published: 1,
          content: "fgdg",
        },
        {
          authorId: 4,
          parentId: 9,
          title: "hgdf",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
          summary: "jdfkg",
          published: 1,
          content: "fgdg",
        },
      ],
    });

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
    const result = await prisma.post.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.post.findMany({
    //   where: { title: "Prisma" },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.post.findFirst();

    //============find orderBy=================
    //const result = await prisma.post.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.post.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.post.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.post.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.post.findMany({
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
    const result = await prisma.post.update({
      where: { id: 4 },
      data: {
        parentId: 4,
        title: "Prisma",
        metaTitle: "dfsdfds",
        slug: "fjdnbv",
        summary: "jdfkg",
        published: 1,
        content: "fgdg",
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
    const result = await prisma.post.delete({
      where: { id: 6 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
