require "test_helper"

class AdminsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admins_index_url
    assert_response :success
  end

  test "should get users" do
    get admins_users_url
    assert_response :success
  end

  test "should get rooms" do
    get admins_rooms_url
    assert_response :success
  end

  test "should get conversations" do
    get admins_conversations_url
    assert_response :success
  end
end
