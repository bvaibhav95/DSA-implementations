import sys


def rotate_array_by_d_positions(arr, d=1, dir='l'):
    if (dir == 'r'):
        for i in range(d):
            temp = arr[-1]
            for j in range(len(arr) - 1):
                arr[len(arr) - 1 - j] = arr[len(arr) - 2 - j]
            arr[0] = temp
        return arr
    elif (dir == 'l'):
        for i in range(d):
            temp = arr[0]
            for j in range(len(arr) - 1):
                arr[j] = arr[j + 1]
            arr[-1] = temp
        return arr
    else:
        print("Invalid direction")
        sys.exit()


def reverse_the_array(a):
    for i in range(int(len(a) / 2)):
        temp = a[i]
        a[i] = a[len(a) - 1 - i]
        a[len(a) - 1 - i] = temp
    return a


def rearrange_array(a):
    #rearrange such that a[i] = i
    s = set(a)
    for i in range(len(a)):
        if i in s:
            a[i] = i
        else:
            a[i] = -1
    return a


def rearrange_array_v1(a):
    #rearrange in such a way that +ve & -ve nums are alternative
    #assume all elements are non-zero
    j = 0
    for i in range(len(a)):
        if (a[i] < 0):
            a[i], a[j] = a[j], a[i]
            j += 1
    pos, neg = j, 0
    while (neg < pos and pos < len(a) and a[neg] < 0):
        a[neg], a[pos] = a[pos], a[neg]
        neg += 2
        pos += 1
    return a


def move_zeros_to_array_end(a):
    j = len(a) - 1
    i = 0
    # while(i < j  and i < len(a))  -> No need of extra "and" because it will never run infinitely
    while (i < j):
        print(i)
        if (a[i] == 0):
            print(a[i])
            a[i], a[j] = a[j], a[i]
            j -= 1
        i += 1
    return a


if __name__ == "__main__":
    arr = [1, -1, 1, 3, -4]
    print(move_zeros_to_array_end(arr))
