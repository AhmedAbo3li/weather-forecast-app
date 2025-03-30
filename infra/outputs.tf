output "eks_cluster_id" {
  description = "EKS Cluster ID"
  value       = module.eks.eks_cluster_id
}

output "eks_endpoint" {
  description = "EKS API Endpoint"
  value       = module.eks.eks_endpoint
}
