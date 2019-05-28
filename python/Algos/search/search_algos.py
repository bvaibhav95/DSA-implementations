def binary_search_recusion(arr, start, end, key):
    if end >= start:
        mid = int((start + end) / 2)
        if (arr[mid] == key):
            return mid
        elif (arr[mid] > key):
            return binary_search_recusion(arr, start, mid - 1, key)
        else:
            return binary_search_recusion(arr, mid + 1, end, key)
    else:  
        return -1  

def binary_search_iteration(arr, start, end, key):
    while (end >= start):
        mid = int((start + end) / 2)
        if (arr[mid] == key):
            return mid
        elif (arr[mid] > key):
            end = mid - 1
        else:
            start = mid + 1
    return -1

def linear_search(arr, key):
    for i in range(len(arr)):
        if (arr[i] == key):
            return i
    return -1

def is_sorted(arr):
    # in order to check for decreasing, reverse array and do same
    for i in range(len(arr)-1):
        if ((arr[i+1] > arr[i])):   
            continue
        else:
            return False
    return True


if __name__ == "__main__":
    a = [0,2,3,4,5,6]
    print(binary_search_iteration(a, 0, len(a) - 1, 2))