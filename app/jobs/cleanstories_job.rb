class CleanstoriesJob < ApplicationJob
  queue_as :default
  include Sidekiq::Worker

  def perform
    Dissaperingpost.recent.destroy_all
  end
end
