import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.post_meta.create({
    //   data: {
    //     postId: 5,
    //     key: "fjdnbv",
    //     content: "fgdg",
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.post_meta.createMany({
      data: [
        {
          postId: 5,
          key: "fjdnbv",
          content: "fgdg",
        },
        {
          postId: 6,
          key: "fjdnbv",
          content: "fgdg",
        },
        {
          postId: 4,
          key: "fjdnbv",
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
    const result = await prisma.post_meta.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.post_meta.findMany({
    //   where: { postId: 5 },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.post_meta.findFirst();

    //============find orderBy=================
    //const result = await prisma.post_meta.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.post_meta.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.post_meta.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.post_meta.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.post_meta.findMany({
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
    const result = await prisma.post_meta.update({
      where: { id: 4 },
      data: {
        postId: 4,
        key: "fjdnbv",
        content: "lkhgfjlfhfj",
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
    const result = await prisma.post_meta.delete({
      where: { id: 2 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
