class CleanStoriesJob < ApplicationJob
  queue_as :default
  sidekiq_options retry: 3

  def perform
    Story.recent.destroy_all
  end
end
