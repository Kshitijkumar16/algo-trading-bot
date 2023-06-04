import pandas as pd

# Load the CSV data into a Pandas dataframe
df = pd.read_csv('all_stocks.csv')
    
# Define the time period for RSI calculation
period = 7

# Calculate the price change for each day
delta = df['close'].diff()

# Define the upward and downward price movements
up = delta.where(delta > 0, 0)
down = -delta.where(delta < 0, 0)

# Calculate the exponential moving averages for upward and downward movements
ma_up = up.ewm(span=period).mean()
ma_down = down.ewm(span=period).mean()

# Calculate the relative strength (RS) and relative strength index (RSI)
rs = ma_up / ma_down
RSI = 100 - (100 / (1 + rs))

# Add the RSI values to the dataframe
df['RSI'] = RSI

# Calculate the typical price of each transaction
typical_price = (df['high'] + df['low'] + df['close']) / 3

# Calculate the stock price
df['Stock_Price'] = (df['high'] + df['low']) / 2

# Calculate the total volume traded at each price level
volume_price = typical_price * df['volume']

# Calculate the cumulative volume traded at each price level
cumulative_volume = volume_price.cumsum()

# Calculate the cumulative volume traded
total_volume = df['volume'].cumsum()

# Calculate the VWAP
vwap = cumulative_volume / total_volume


if all([(30 <= rsi <= 50) for rsi in RSI]) and (vwap.tail(1).values[0] > df['Stock_Price'].tail(1).values[0]):
    print("Buy")
else:
    print("Sell")