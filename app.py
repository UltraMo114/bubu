from flask import Flask, render_template

app = Flask(__name__)

# Define the sticker sequence
STICKERS = [
    'sticker_1.gif',
    'sticker_3.gif',
    'sticker_7.gif',
    'sticker_10.gif',
    'sticker_11.gif',
    'sticker_18.gif',
    'sticker_21.gif'
]

@app.route('/')
def index():
    return render_template('index.html', stickers=STICKERS)

if __name__ == '__main__':
    app.run(debug=True)