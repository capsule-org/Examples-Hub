import React from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../demo-ui/components/card";
import { Input } from "../../demo-ui/components/input";
import { Button } from "../../demo-ui/components/button";
import { Alert, AlertDescription } from "../../demo-ui/components/alert";

export type UserOp = {
  value: string;
};

type BatchOperationsFormProps = {
  userOps: UserOp[];
  onAddOperation: () => void;
  onRemoveOperation: (index: number) => void;
  onValueChange: (index: number, value: string) => void;
  onSign: () => void;
  loading: boolean;
  error: string;
  txHash: string;
};

const BatchOperationsForm: React.FC<BatchOperationsFormProps> = ({
  userOps,
  onAddOperation,
  onRemoveOperation,
  onValueChange,
  onSign,
  loading,
  error,
  txHash,
}) => {
  // Simple validation for uint256
  const isValidValue = (value: string) => {
    try {
      return value !== "" && BigInt(value) >= 0;
    } catch {
      return false;
    }
  };

  const hasValidOperations = userOps.every((op) => isValidValue(op.value));

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Batch Change X Values</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {userOps.map((op, index) => (
          <div
            key={index}
            className="flex items-center gap-2">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={op.value}
              onChange={(e) => onValueChange(index, e.target.value)}
              placeholder={`Value for operation ${index + 1}`}
              className="flex-1"
            />
            {userOps.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => onRemoveOperation(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}

        <Button
          variant="outline"
          onClick={onAddOperation}
          className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Operation
        </Button>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {txHash && (
          <Alert>
            <AlertDescription>Transaction Hash: {txHash}</AlertDescription>
          </Alert>
        )}
      </CardContent>

      <CardFooter>
        <Button
          onClick={onSign}
          disabled={loading || !hasValidOperations}
          className="w-full">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            "Sign Batch"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BatchOperationsForm;
