require 'faker'
Favorite.destroy_all
User.destroy_all
Rental.destroy_all



puts "🌱 Seeding spices..."

20.times {
    User.create({
        username: Faker::Name.first_name.delete(' ')+rand(1..1000).to_s,
        email: Faker::Internet.email,
        password: Faker::Alphanumeric.alpha(number: 6)
    })
}

Rental.create(year: 2020, make: "Kawasaki", model: "ZX-6R", price: 99, city: "Miami", state: "FL", image_url: "https://cdn2.cycletrader.com/v1/media/61beca5e77e89257e16219c5.jpg?width=512&height=384&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100", user_id: 1)
Rental.create(year: 2019, make: "Kawasaki", model: "ZX-10R", price: 150, city: "Miami", state: "FL", image_url: "https://bikes.motobank.co.uk/fp/16141/kawasaki-zx1002ekfa-2019-green_1.jpg", user_id: 2)
Rental.create(year: 2021, make: "Yamaha", model: "R6", price: 120, city: "Orlando", state: "FL", image_url: "http://images.summitmedia-digital.com/topbikes/images/2021/04/13/r6-arko-main-1618279320.jpg", user_id: 3)
Rental.create(year: 2018, make: "Suzuki", model: "GSX-R 750", price: 140, city: "Orlando", state: "FL", image_url: "https://mcn-images.bauersecure.com/PageFiles/489400/Suzuki-GSX-R750-01.jpg", user_id: 4)
Rental.create(year: 2020, make: "Suzuki", model: "GSX-R 600", price: 110, city: "Houston", state: "TX", image_url: "https://cdnmedia.endeavorsuite.com/images/organizations/d95e2d1f-ff32-4ee1-881c-5a522c8052d2/inventory/11120323/SAM_8636.JPG", user_id: 5)
Rental.create(year: 2021, make: "Harley-Davidson", model: "Iron 1200", price: 140, city: "Houston", state: "TX", image_url: "https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/2020-Harley-Davidson-Iron-1200-Review-criuser-motorcycle-6.jpg", user_id: 6)
Rental.create(year: 2022, make: "Honda", model: "Shadow Phantom", price: 160, city: "Los Angeles", state: "CA", image_url: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/12/Honda-Shadow-Phantom-F-YouTube.jpg", user_id: 7)
Rental.create(year: 2015, make: "Suzuki", model: "SV650S", price: 80, city: "Los Angeles", state: "CA", image_url: "https://cdn-0.totalmotorcycle.com/motorcycles/2015/2015-Suzuki-SV650S-ABS3.jpg", user_id: 8)
Rental.create(year: 2016, make: "Yamaha", model: "R6", price: 95, city: "Atlanta", state: "GA", image_url: "https://cdnmedia.endeavorsuite.com/images/organizations/011e0b2a-0700-4173-ba6a-c0acc6ac2e32/inventory/11015789/PXL_20210521_205309845.MP.jpg", user_id: 9)
Rental.create(year: 2018, make: "Yamaha", model: "R1", price: 120, city: "Atlanta", state: "GA", image_url: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/67/C3/67C364D4-A851-48F2-8016-2A9B369B5EFF.jpg", user_id: 10)
Rental.create(year: 2017, make: "Suzuki", model: "GSX-R 1000", price: 140, city: "Denver", state: "CO", image_url: "https://i.pinimg.com/originals/8f/49/34/8f493432daf9ea080f8003f51fe73d2d.jpg", user_id: 11)
Rental.create(year: 2022, make: "Indian", model: "FTR", price: 200, city: "Denver", state: "CO", image_url: "https://ridermagazine.com/wp-content/uploads/2021/01/2022-Indian-FTR-1200-S-2.jpg", user_id: 12)

5.times {
    Favorite.create({
        rental_id: Rental.all.sample.id,
        user_id: User.all.sample.id 
    })
}

puts "✅ Done seeding!"

