variable "cluster_name" {
  description = "The name of the EKS cluster"
  type        = string
}

variable "eks_role_arn" {
  description = "The IAM role ARN for EKS"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for the EKS cluster"
  type        = list(string)
}
