class CleanMessagesWorker
  include Sidekiq::Worker
  queue_as :default

  def perform(*args)
    self.class.perform_at 1.second.from_now.change
    remove = Message.where('created_at < ?', 7.days.ago)
    remove.delete_all
  end
end
