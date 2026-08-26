import os
import re

count = 0
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = re.sub(r'^export const dynamic = ["\']force-dynamic["\']; *\n', '', content, flags=re.MULTILINE)
                
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
                    print(f"Cleaned: {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"\nTotal files cleaned: {count}")
