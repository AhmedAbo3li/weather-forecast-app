output "eks_cluster_id" {
  description = "EKS Cluster ID"
  value       = aws_eks_cluster.eks_cluster.id
}

output "eks_endpoint" {
  description = "EKS API Endpoint"
  value       = aws_eks_cluster.eks_cluster.endpoint
}

output "node_role_arn" {
  description = "IAM Role ARN for EKS Node Group"
  value       = aws_iam_role.node_role.arn
}
