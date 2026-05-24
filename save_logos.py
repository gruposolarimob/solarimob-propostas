import base64, sys, os

imgs = sys.argv[1:]  # list of "filename:b64file" pairs
for item in imgs:
    fname, b64file = item.split(':', 1)
    with open(b64file) as f:
        data = f.read().strip()
    with open(fname, 'wb') as out:
        out.write(base64.b64decode(data))
    print(f"Saved {fname}")
