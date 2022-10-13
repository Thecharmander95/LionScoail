class ExpensesController < ApplicationController
  before_action :set_payment
  before_action :set_expense, only: [:edit, :update, :destroy]

  def index
    @expense = Expense.all
  end

  def new
    @expense = @payment.expenses.new
  end

  def edit
  end

  def create
    @expense = @payment.expenses.new(expense_params)

    respond_to do |format|
      if @expense.save
        format.html { redirect_to payment_path(@payment), notice: 'Expense was successfully created.' }
        format.json { render :show, status: :created, location: @expense }
      else
        format.html { render :new }
        format.json { render json: @expense.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @expense.update(expense_params)
        format.html { redirect_to @payment, notice: 'Expense was successfully updated.' }
        format.json { render :show, status: :ok, location: @expense }
      else
        format.html { render :edit }
        format.json { render json: @expense.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @expense.destroy
    respond_to do |format|
      format.html { redirect_to payment_url(@payment), notice: 'Expense was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_payment
      @payment = Payment.find(params[:id])
    end

    def set_expense
      @expense = @payment.expenses.find(params[:id])
    end

    def expense_params
      params.require(:expense).permit(:title, :amount, :time)
    end
end
