import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.tag.create({
    //   data: {
    //     title: "fvdfgd",
    //     metaTitle: "dfsdfds",
    //     slug: "fjdnbv",
    //     content: "fgdg",
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.tag.createMany({
      data: [
        {
          title: "fdgd",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
          content: "fgdg",
        },
        {
          title: "iyre",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
          content: "fgdg",
        },
        {
          title: "hgdf",
          metaTitle: "dfsdfds",
          slug: "fjdnbv",
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
    const result = await prisma.tag.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.tag.findMany({
    //   where: { title: "hgdf" },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.tag.findFirst();

    //============find orderBy=================
    //const result = await prisma.tag.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.tag.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.tag.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.tag.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.tag.findMany({
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
    const result = await prisma.tag.update({
      where: { id: 4 },
      data: {
        title: "Prisma",
        metaTitle: "dfsdfds",
        slug: "fjdnbv",
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
    const result = await prisma.tag.delete({
      where: { id: 2 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
