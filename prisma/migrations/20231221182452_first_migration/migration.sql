-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(100),
    "price" DOUBLE PRECISION NOT NULL,
    "Category" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" TEXT NOT NULL,
    "category_name" VARCHAR(50) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_category_id_key" ON "Product"("category_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_fkey" FOREIGN KEY ("id") REFERENCES "category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
