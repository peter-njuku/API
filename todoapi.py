import requests

response = requests.get('https://jsonplaceholder.typicode.com/todos')

print(response.status_code)
print(response.json())

new_post={
    "userId": 11,
    "id": 201,
    "title": "Learning Pthon",
    "completed": False
}  

response = requests.post('https://jsonplaceholder.typicode.com/todos/11', json=new_post)
print(response.status_code)
print(response.json())

updated_data={
    "title": "Learning APIs",
}

response = requests.put('https://jsonplaceholder.typicode.com/todos/11', json=updated_data)
print(response.status_code)
print(response.json())

response = requests.delete('https://jsonplaceholder.typicode.com/todos/11')
print(response.status_code)
print("Deleted successfully" if response.status_code == 200 else "Failed to delete")

