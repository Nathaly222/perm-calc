import { Injectable } from '@nestjs/common';
import { factorial } from 'mathjs';

@Injectable()
export class FunctionService {
  // Calcula el factorial de un número
  calculateFactorial(num: number): number {
    return factorial(num);
  }

  // Permutación lineal (P(n, r) = n! / (n - r)!)
  calculateLinearPermutation(n: number, r: number): number {
    return factorial(n) / factorial(n - r);
  }

  // Permutación circular (P(n) = (n - 1)!)
  calculateCircularPermutation(n: number): number {
    return factorial(n - 1);
  }

  // Permutación de repetición (P(n, r) = n! / (n1! * n2! * ... * nr!))
  calculateRepetitionPermutation(n: number, repetitionCounts: number[]): number {
    const numerator = factorial(n);
    const denominator = repetitionCounts.reduce((acc, count) => acc * factorial(count), 1);
    return numerator / denominator;
  }
}
