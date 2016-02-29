namespace :demo do
  desc "Run demo"
  task activity: :environment do
    Message.destroy_all

    while true
      user = User.find_or_create_by(username: "bot_#{rand(10)}")

      puts "Creating message for #{user.username}"

      user.messages.create!(
        text: 'Sample message',
      )

      sleep 1
    end
  end
end
