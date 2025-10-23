"""Module containing search and sorting algorithms.

This module provides implementations of various search and sorting algorithms
commonly used in computer science and software development.
"""

from typing import Any, Optional


def linear_search(arr: list[Any], target: Any) -> int:
    """Search for a target element in an array using linear search.

    Args:
        arr: The list to search in.
        target: The element to search for.

    Returns:
        The index of the target element if found, -1 otherwise.

    Examples:
        >>> linear_search([1, 3, 5, 7, 9], 5)
        2
        >>> linear_search([1, 3, 5, 7, 9], 4)
        -1
    """
    for i, element in enumerate(arr):
        if element == target:
            return i
    return -1


def binary_search(arr: list[Any], target: Any) -> int:
    """Search for a target element in a sorted array using binary search.

    Args:
        arr: The sorted list to search in.
        target: The element to search for.

    Returns:
        The index of the target element if found, -1 otherwise.

    Note:
        The array must be sorted in ascending order for this algorithm to work correctly.

    Examples:
        >>> binary_search([1, 3, 5, 7, 9], 5)
        2
        >>> binary_search([1, 3, 5, 7, 9], 4)
        -1
    """
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


def binary_search_recursive(arr: list[Any], target: Any, left: Optional[int] = None, right: Optional[int] = None) -> int:
    """Search for a target element using recursive binary search.

    Args:
        arr: The sorted list to search in.
        target: The element to search for.
        left: The left boundary index (defaults to 0).
        right: The right boundary index (defaults to len(arr) - 1).

    Returns:
        The index of the target element if found, -1 otherwise.

    Note:
        The array must be sorted in ascending order for this algorithm to work correctly.

    Examples:
        >>> binary_search_recursive([1, 3, 5, 7, 9], 5)
        2
        >>> binary_search_recursive([1, 3, 5, 7, 9], 4)
        -1
    """
    if left is None:
        left = 0
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)


def bubble_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using bubble sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n²) in worst and average case.
        Space complexity: O(n) due to creating a copy.

    Examples:
        >>> bubble_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> bubble_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    result = arr.copy()
    n = len(result)

    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if result[j] > result[j + 1]:
                result[j], result[j + 1] = result[j + 1], result[j]
                swapped = True
        if not swapped:
            break

    return result


def selection_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using selection sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n²) in all cases.
        Space complexity: O(n) due to creating a copy.

    Examples:
        >>> selection_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> selection_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    result = arr.copy()
    n = len(result)

    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if result[j] < result[min_idx]:
                min_idx = j
        result[i], result[min_idx] = result[min_idx], result[i]

    return result


def insertion_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using insertion sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n²) in worst case, O(n) in best case.
        Space complexity: O(n) due to creating a copy.

    Examples:
        >>> insertion_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> insertion_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    result = arr.copy()
    n = len(result)

    for i in range(1, n):
        key = result[i]
        j = i - 1
        while j >= 0 and result[j] > key:
            result[j + 1] = result[j]
            j -= 1
        result[j + 1] = key

    return result


def merge_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using merge sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n log n) in all cases.
        Space complexity: O(n).

    Examples:
        >>> merge_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> merge_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    if len(arr) <= 1:
        return arr.copy()

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return _merge(left, right)


def _merge(left: list[Any], right: list[Any]) -> list[Any]:
    """Merge two sorted arrays into one sorted array.

    Args:
        left: The first sorted list.
        right: The second sorted list.

    Returns:
        A merged sorted list.
    """
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result


def quick_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using quick sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n log n) average case, O(n²) worst case.
        Space complexity: O(log n) due to recursion stack.

    Examples:
        >>> quick_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> quick_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    if len(arr) <= 1:
        return arr.copy()

    result = arr.copy()
    _quick_sort_helper(result, 0, len(result) - 1)
    return result


def _quick_sort_helper(arr: list[Any], low: int, high: int) -> None:
    """Helper function for quick sort algorithm.

    Args:
        arr: The list to sort (modified in-place).
        low: The starting index.
        high: The ending index.
    """
    if low < high:
        pivot_index = _partition(arr, low, high)
        _quick_sort_helper(arr, low, pivot_index - 1)
        _quick_sort_helper(arr, pivot_index + 1, high)


def _partition(arr: list[Any], low: int, high: int) -> int:
    """Partition the array for quick sort.

    Args:
        arr: The list to partition (modified in-place).
        low: The starting index.
        high: The ending index.

    Returns:
        The pivot index after partitioning.
    """
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def heap_sort(arr: list[Any]) -> list[Any]:
    """Sort an array using heap sort algorithm.

    Args:
        arr: The list to sort.

    Returns:
        A new sorted list in ascending order.

    Note:
        Time complexity: O(n log n) in all cases.
        Space complexity: O(n) due to creating a copy.

    Examples:
        >>> heap_sort([64, 34, 25, 12, 22, 11, 90])
        [11, 12, 22, 25, 34, 64, 90]
        >>> heap_sort([5, 1, 4, 2, 8])
        [1, 2, 4, 5, 8]
    """
    result = arr.copy()
    n = len(result)

    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        _heapify(result, n, i)

    # Extract elements from heap one by one
    for i in range(n - 1, 0, -1):
        result[0], result[i] = result[i], result[0]
        _heapify(result, i, 0)

    return result


def _heapify(arr: list[Any], n: int, i: int) -> None:
    """Heapify a subtree rooted at index i.

    Args:
        arr: The list to heapify (modified in-place).
        n: The size of the heap.
        i: The root index of the subtree.
    """
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        _heapify(arr, n, largest)


def jump_search(arr: list[Any], target: Any) -> int:
    """Search for a target element using jump search algorithm.

    Args:
        arr: The sorted list to search in.
        target: The element to search for.

    Returns:
        The index of the target element if found, -1 otherwise.

    Note:
        The array must be sorted in ascending order.
        Time complexity: O(√n).

    Examples:
        >>> jump_search([1, 3, 5, 7, 9, 11, 13, 15], 9)
        4
        >>> jump_search([1, 3, 5, 7, 9], 4)
        -1
    """
    n = len(arr)
    if n == 0:
        return -1

    # Finding block size to be jumped
    step = int(n ** 0.5)
    prev = 0

    # Finding the block where element is present
    while prev < n and arr[min(step, n) - 1] < target:
        prev = step
        step += int(n ** 0.5)
        if prev >= n:
            return -1

    # Linear search in the identified block
    while prev < n and arr[prev] < target:
        prev += 1

    # If element is found
    if prev < n and arr[prev] == target:
        return prev

    return -1


def interpolation_search(arr: list[int], target: int) -> int:
    """Search for a target element using interpolation search algorithm.

    Args:
        arr: The sorted list of integers to search in.
        target: The integer element to search for.

    Returns:
        The index of the target element if found, -1 otherwise.

    Note:
        The array must be sorted and uniformly distributed for best performance.
        Time complexity: O(log log n) for uniformly distributed data, O(n) worst case.

    Examples:
        >>> interpolation_search([1, 3, 5, 7, 9, 11, 13, 15], 9)
        4
        >>> interpolation_search([1, 3, 5, 7, 9], 4)
        -1
    """
    low = 0
    high = len(arr) - 1

    while low <= high and target >= arr[low] and target <= arr[high]:
        if low == high:
            if arr[low] == target:
                return low
            return -1

        # Probing the position with keeping uniform distribution in mind
        pos = low + int(((high - low) / (arr[high] - arr[low])) * (target - arr[low]))

        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1

    return -1

