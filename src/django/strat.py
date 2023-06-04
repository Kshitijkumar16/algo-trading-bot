from kite_trade import *
import requests
import pandas_ta as ta
import pandas as pd
import datetime
import pytz


# Initialize KiteApp and get the historical data
enctoken = "ZAe5bcQkyHQu68j3ogCzNS+eAeXEVKKqTXx9czVngHqZfPJ/guTv/8qtJKip2bHXBACNPL/mt+PydUvdlcfSEIMrRgsoxv4mGBRlbyE4JBeka9qXJM3sdg=="
kite = KiteApp(enctoken=enctoken)


# set the timezone to India Standard Time (IST)
timezone = pytz.timezone("Asia/Kolkata")

# define the instrument token for the stock you want to get data for
instrument_token = 256265

# get the current date and time in IST
now = datetime.datetime.now(timezone)

# set the start and end dates for the data you want to retrieve
to_date = now.date().strftime("%Y-%m-%d")
from_date = (now - datetime.timedelta(days=1)).date().strftime("%Y-%m-%d")

# set the interval for the data you want to retrieve
interval = "60minute"

# get the historical data
historical_data = kite.historical_data(instrument_token, from_date, to_date, interval, continuous=False, oi=False)

# create empty lists for open, high, low, and close data
opens = []
highs = []
lows = []
closes = []
volume = []

# iterate through the historical data and append the values to the lists
for candle in historical_data:
    opens.append(candle["open"])
    highs.append(candle["high"])
    lows.append(candle["low"])
    closes.append(candle["close"])
    volume.append(candle["volume"])

# print the OHLC data for one minute timeframe
print("Open: ", opens)
print("High: ", highs)
print("Low: ", lows)
print("Close: ", closes)
print("Volume: ", volume)
