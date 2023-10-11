import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.post_category.create({
    //   data: {
    //     postId: 4,
    //     categoryId: 2,
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.post_category.createMany({
      data: [
        {
          postId: 4,
          categoryId: 3,
        },
        {
          postId: 5,
          categoryId: 4,
        },
        {
          postId: 6,
          categoryId: 1,
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
    const result = await prisma.post_category.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.post_category.findMany({
    //   where: { postId: 4 },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.post_category.findFirst();

    //============find orderBy=================
    //const result = await prisma.post_category.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.post_category.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.post_category.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.post_category.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.post_category.findMany({
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
    const result = await prisma.post_category.update({
      where: { id: 3 },
      data: {
        postId: 4,
        categoryId: 1,
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
    const result = await prisma.post_category.delete({
      where: { id: 2 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
