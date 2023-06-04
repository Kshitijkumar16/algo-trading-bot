import pandas as pd
import pandas_ta as ta

# Create a DataFrame so 'ta' can be used.
df = pd.DataFrame()

# Prints the indicators and utility functions
df.ta.indicators()

# Returns a list of indicators and utility functions
ind_list = df.ta.indicators(as_list=True)

# Prints the indicators and utility functions that are not in the excluded list
df.ta.indicators(exclude=["cg", "pgo", "ui"])
# Returns a list of the indicators and utility functions that are not in the excluded list
smaller_list = df.ta.indicators(exclude=["cg", "pgo", "ui"], as_list=True)