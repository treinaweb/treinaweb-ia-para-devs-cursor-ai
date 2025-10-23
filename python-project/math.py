"""Module containing mathematical utility functions.

This module provides various mathematical operations including basic arithmetic,
advanced calculations, and number theory functions.
"""


def add(a: float, b: float) -> float:
    """Add two numbers.

    Args:
        a: The first number.
        b: The second number.

    Returns:
        The sum of a and b.

    Examples:
        >>> add(5, 3)
        8
        >>> add(2.5, 1.5)
        4.0
    """
    return a + b


def subtract(a: float, b: float) -> float:
    """Subtract two numbers.

    Args:
        a: The first number.
        b: The second number.

    Returns:
        The difference between a and b.

    Examples:
        >>> subtract(10, 3)
        7
        >>> subtract(5.5, 2.5)
        3.0
    """
    return a - b


def multiply(a: float, b: float) -> float:
    """Multiply two numbers.

    Args:
        a: The first number.
        b: The second number.

    Returns:
        The product of a and b.

    Examples:
        >>> multiply(4, 5)
        20
        >>> multiply(2.5, 4)
        10.0
    """
    return a * b


def divide(a: float, b: float) -> float:
    """Divide two numbers.

    Args:
        a: The numerator.
        b: The denominator.

    Returns:
        The quotient of a divided by b.

    Raises:
        ValueError: If b is zero.

    Examples:
        >>> divide(10, 2)
        5.0
        >>> divide(15, 3)
        5.0
    """
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def power(base: float, exponent: float) -> float:
    """Raise a number to a power.

    Args:
        base: The base number.
        exponent: The exponent.

    Returns:
        The result of base raised to the exponent.

    Examples:
        >>> power(2, 3)
        8
        >>> power(5, 2)
        25
    """
    return base ** exponent


def square_root(number: float) -> float:
    """Calculate the square root of a number.

    Args:
        number: The number to calculate the square root of.

    Returns:
        The square root of the number.

    Raises:
        ValueError: If number is negative.

    Examples:
        >>> square_root(16)
        4.0
        >>> square_root(25)
        5.0
    """
    if number < 0:
        raise ValueError("Cannot calculate square root of a negative number")
    return number ** 0.5


def factorial(n: int) -> int:
    """Calculate the factorial of a non-negative integer.

    Args:
        n: The non-negative integer.

    Returns:
        The factorial of n.

    Raises:
        ValueError: If n is negative.

    Examples:
        >>> factorial(5)
        120
        >>> factorial(0)
        1
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def is_prime(n: int) -> bool:
    """Check if a number is prime.

    Args:
        n: The number to check.

    Returns:
        True if n is prime, False otherwise.

    Examples:
        >>> is_prime(7)
        True
        >>> is_prime(10)
        False
        >>> is_prime(2)
        True
    """
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(square_root(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


def gcd(a: int, b: int) -> int:
    """Calculate the greatest common divisor of two numbers.

    Uses the Euclidean algorithm.

    Args:
        a: The first number.
        b: The second number.

    Returns:
        The greatest common divisor of a and b.

    Examples:
        >>> gcd(48, 18)
        6
        >>> gcd(100, 50)
        50
    """
    a, b = abs(a), abs(b)
    while b:
        a, b = b, a % b
    return a


def lcm(a: int, b: int) -> int:
    """Calculate the least common multiple of two numbers.

    Args:
        a: The first number.
        b: The second number.

    Returns:
        The least common multiple of a and b.

    Raises:
        ValueError: If either a or b is zero.

    Examples:
        >>> lcm(12, 18)
        36
        >>> lcm(5, 7)
        35
    """
    if a == 0 or b == 0:
        raise ValueError("LCM is not defined for zero")
    return abs(a * b) // gcd(a, b)


def absolute_value(n: float) -> float:
    """Calculate the absolute value of a number.

    Args:
        n: The number.

    Returns:
        The absolute value of n.

    Examples:
        >>> absolute_value(-5)
        5
        >>> absolute_value(3)
        3
    """
    return n if n >= 0 else -n


def is_even(n: int) -> bool:
    """Check if a number is even.

    Args:
        n: The number to check.

    Returns:
        True if n is even, False otherwise.

    Examples:
        >>> is_even(4)
        True
        >>> is_even(7)
        False
    """
    return n % 2 == 0


def is_odd(n: int) -> bool:
    """Check if a number is odd.

    Args:
        n: The number to check.

    Returns:
        True if n is odd, False otherwise.

    Examples:
        >>> is_odd(7)
        True
        >>> is_odd(4)
        False
    """
    return n % 2 != 0


def average(numbers: list[float]) -> float:
    """Calculate the average of a list of numbers.

    Args:
        numbers: A list of numbers.

    Returns:
        The average of the numbers.

    Raises:
        ValueError: If the list is empty.

    Examples:
        >>> average([1, 2, 3, 4, 5])
        3.0
        >>> average([10, 20, 30])
        20.0
    """
    if not numbers:
        raise ValueError("Cannot calculate average of an empty list")
    return sum(numbers) / len(numbers)


def maximum(numbers: list[float]) -> float:
    """Find the maximum value in a list of numbers.

    Args:
        numbers: A list of numbers.

    Returns:
        The maximum value.

    Raises:
        ValueError: If the list is empty.

    Examples:
        >>> maximum([1, 5, 3, 9, 2])
        9
        >>> maximum([10, 20, 15])
        20
    """
    if not numbers:
        raise ValueError("Cannot find maximum of an empty list")
    max_value = numbers[0]
    for num in numbers[1:]:
        if num > max_value:
            max_value = num
    return max_value


def minimum(numbers: list[float]) -> float:
    """Find the minimum value in a list of numbers.

    Args:
        numbers: A list of numbers.

    Returns:
        The minimum value.

    Raises:
        ValueError: If the list is empty.

    Examples:
        >>> minimum([1, 5, 3, 9, 2])
        1
        >>> minimum([10, 20, 15])
        10
    """
    if not numbers:
        raise ValueError("Cannot find minimum of an empty list")
    min_value = numbers[0]
    for num in numbers[1:]:
        if num < min_value:
            min_value = num
    return min_value

