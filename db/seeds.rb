require 'faker'
User.destroy_all


puts "🌱 Seeding spices..."

20.times {
    User.create({
        username: Faker::Name.first_name.delete(' ')+rand(1..1000).to_s,
        email: Faker::Internet.email,
        password: Faker::Alphanumeric.alpha(number: 6)
    })
}

Rental.create(year: 2020, make: "Kawasaki", model: "ZX-6R", cc: 600, image_url: "https://cdn2.cycletrader.com/v1/media/61beca5e77e89257e16219c5.jpg?width=512&height=384&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100", user_id: 1)
Rental.create(year: 2019, make: "Kawasaki", model: "ZX-10R", cc: 1000, image_url: "https://bikes.motobank.co.uk/fp/16141/kawasaki-zx1002ekfa-2019-green_1.jpg", user_id: 2)
Rental.create(year: 2021, make: "Yamaha", model: "R6", cc: 600, image_url: "http://images.summitmedia-digital.com/topbikes/images/2021/04/13/r6-arko-main-1618279320.jpg", user_id: 3)
Rental.create(year: 2018, make: "Suzuki", model: "GSX-R 750", cc: 750, image_url: "https://mcn-images.bauersecure.com/PageFiles/489400/Suzuki-GSX-R750-01.jpg", user_id: 4)
Rental.create(year: 2020, make: "Suzuki", model: "GSX-R 600", cc: 600, image_url: "https://cdnmedia.endeavorsuite.com/images/organizations/d95e2d1f-ff32-4ee1-881c-5a522c8052d2/inventory/11120323/SAM_8636.JPG", user_id: 5)

5.times {
    Favorite.create({
        rental_id: Rental.all.sample.id,
        user_id: User.all.sample.id 
    })
}

puts "✅ Done seeding!"

