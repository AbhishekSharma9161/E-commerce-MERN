require('dotenv').config()
const Product = require('../models/Product')
const { connectToDB } = require('../database/db')

const imageMap = {
  // Smartphones
  "iPhone 9": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400",
  "Samsung Universe 9": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  "OPPOF19": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
  "Huawei P30": "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",

  // Laptops
  "MacBook Pro": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  "Samsung Galaxy Book": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
  "Microsoft Surface Laptop 4": "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400",
  "Infinix INBOOK": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
  "HP Pavilion 15-DK1056WM": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",

  // Fragrances
  "perfume Oil": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
  "Brown Perfume": "https://images.unsplash.com/photo-1733660227168-444e3c751a1e?w=400&auto=format&fit=crop",
  "Fog Scent Xpressio Perfume custom": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
  "Fog Scent Xpressio Perfume": "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
  "Non-Alcoholic Concentrated Perfume Oil": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
  "Eau De Perfume Spray": "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400",

  // Skincare
  "Hyaluronic Acid Serum": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
  "Tree Oil 30ml": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
  "Oil Free Moisturizer 100ml": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
  "Skin Beauty Serum.": "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400",
  "Freckle Treatment Cream- 15gm": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",

  // Groceries
  "- Daal Masoor 500 grams": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
  "Elbow Macaroni - 400 gm": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400",
  "Orange Essence Food Flavou": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
  "cereals muesli fruit nuts": "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400",
  "Gulab Powder 50 Gram": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",

  // Home Decoration
  "Plant Hanger For Home": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
  "Flying Wooden Bird": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400",
  "3D Embellishment Art Lamp": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  "Handcraft Chinese style": "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?w=400",
  "Key Holder": "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400",

  // Furniture
  "Mornadi Velvet Bed": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400",
  "Sofa for Coffe Cafe": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
  "3 Tier Corner Shelves": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400",
  "Plastic Table": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400",
  "3 DOOR PORTABLE": "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400",

  // Tops / Shirts
  "Sleeve Shirt Womens": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400",
  "ank Tops for Womens/Girls": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
  "sublimation plain kids tank": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400",
  "Women Sweaters Wool": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
  "half sleeves T shirts": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  "FREE FIRE T Shirt": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400",
  "printed high quality T shirts": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400",
  "Pubg Printed Graphic T-Shirt": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400",
  "Money Heist Printed Summer T Shirts": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",

  // Womens Dresses
  "NIGHT SUIT": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
  "Stiched Kurta plus trouser": "https://images.unsplash.com/photo-1735553817415-34af90cf7645?w=400",
  "trock gold printed": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
  "Ladies Multicolored Dress": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400",
  "Maial Maxi Dress": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",

  // Shoes
  "women's shoes": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
  "Sneakers Joggers Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  "Loafers for men": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
  "formal offices shoes": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400",
  "Spring and summershoes": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
  "Stylish Casual Jeans Shoes": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
  "Women Strip Heel": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400",
  "Chappals & Shoe Ladies Metallic": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
  "Women Shoes": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",

  // Mens Shirts
  "Mens Casual Shirt": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",

  // Watches
  "Leather Straps Wristwatch": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
  "Waterproof Leather Brand Watch": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  "Royal Blue Premium Watch": "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400",
  "Leather Strap Skeleton Watch": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400",
  "Stainless Steel Wrist Watch": "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400",
  "Steel Analog Couple Watches": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400",
  "Fashion Magnetic Wrist Watch": "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400",
  "Stylish Luxury Digital Watch": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
  "Golden Watch Pearls Bracelet Watch": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
  "Stainless Steel Women": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",

  // Bags
  "womens-bags": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",

  // Jewellery
  "womens-jewellery": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",

  // Sunglasses
  "sunglasses": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",

  // Automotive / Motorcycle / Lighting
  "automotive": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400",
  "motorcycle": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  "lighting": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
}

const fallback = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"

const fixImages = async () => {
    await connectToDB()
    const products = await Product.find({})
    let fixed = 0, skipped = 0
    for (const product of products) {
        const newImg = imageMap[product.title] || fallback
        product.thumbnail = newImg
        product.images = [newImg]
        await product.save()
        if (imageMap[product.title]) fixed++
        else { skipped++; console.log('Used fallback for:', product.title) }
    }
    console.log(`Done. Fixed: ${fixed}, Used fallback: ${skipped}`)
    process.exit(0)
}

fixImages().catch(err => { console.error(err); process.exit(1) })
