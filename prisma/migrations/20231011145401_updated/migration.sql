/*
  Warnings:

  - You are about to drop the column `keey` on the `post_meta` table. All the data in the column will be lost.
  - Added the required column `key` to the `post_meta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post_meta` DROP COLUMN `keey`,
    ADD COLUMN `key` VARCHAR(50) NOT NULL;
