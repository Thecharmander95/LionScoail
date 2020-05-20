class DeleteOldStoriesWorker
  include Sidekiq::Worker

  def perform(*args)
    Dissaperingpost.recent.destroy_all
  end
end
