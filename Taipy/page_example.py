from taipy import Gui
from helper import changes

data = changes()

print("test data")
print(data)

page = """

# Bar graph

<|{data}|chart|type=bar|x=Country|y=Area|>

"""

Gui(page).run()