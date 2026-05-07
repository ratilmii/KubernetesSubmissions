# Todo app
Deploy with `kubectl apply -f manifests/`

If the cluster was created with a host port mapping (e.g., `-p 8081:80@loadbalancer`), access it by going to: http://localhost:8081/

Otherwise use port-forwarding, like `kubectl port-forward <pod-name> 8081:80` first.
