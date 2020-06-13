class DeleteOldStoriesJob
  queue_as :clean

  def perform
    Dissaperingpost.where("created_at < :time", time: Time.current - 24.hours).destroy_all
  end
end
