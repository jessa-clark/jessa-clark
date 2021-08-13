# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@admin1 = User.create!(
  username: "jemaclark",
  email: "jessa@ga.assembly",
  password: "12345")

@admin2 = User.create!(
  username: "jessa",
  email: "jema@ga.assembly",
  password: "12345")


pp "#{User.count} users created"

@mystic_morning = Project.create!(
  title: "Mystic Morning",
  image_url: "https://i.imgur.com/CwJI6sJ.png",
  deployed_url: "https://mystic-morning.netlify.app/",
  github_url: "https://github.com/jessa-clark/Mystic-Morning",
  specs: "HTML, CSS, Javascript",
  content: "General Assembly SEI Project #1 -- Mystic Morning is a tarot card application that allows users to type in a question and receive an answer using a 3rd party API of the Rider Waite tarot card deck. The API call renders a random card, the title and message of that card. Deployed with Netlify.",
  user_id: @admin1[:id])

pp "#{Project.count} projects created"

@comment_1 = Comment.create!(
  name: "Michael",
  comment: "This looks amazing! Are you planning on re-visiting this for v2?",
  project_id: @mystic_morning[:id])

@comment_2 = Comment.create!(
  name: "Emerson",
  comment: "The Death Card came up. What does that mean?!",
  project_id: @mystic_morning[:id])

pp "#{Comment.count} comments created"