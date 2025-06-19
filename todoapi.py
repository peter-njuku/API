import requests

response = requests.get('https://jsonplaceholder.typicode.com/todos/1')

if response.status_code == 200:
    print("Success")
    print({"userId":response.json()['userId'], "id":response.json()['id'], "title":response.json()['title'], "completed":response.json()['completed']})
else:
    print("Failed to fetch API")

params={"userId": 1}
response = requests.get('https://jsonplaceholder.typicode.com/todos', params=params)
if response.status_code == 200:
    print("success")
    for todo in response.json():
        print({"userId":todo['userId'],
               "id":todo['id'], 
               "title":todo['title'], 
               "completed":todo['completed']})
        
else: 
    print("Failed to fetch API")

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

