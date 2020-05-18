class CleanstoriesJob < ApplicationJob
  queue_as :default

  def perform
    Dissaperingpost.recent.destroy_all
  end
end
