class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        self.x = str(x)

        reverse_str = self.x[::-1]
        return reverse_str == self.x[::-1]
